// import { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function PlansPage() {
//   const [plans, setPlans] = useState([]);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const category = searchParams.get("category");
//   const citizenship = searchParams.get("citizenship");
//   const visaCountry = searchParams.get("visaCountry");

//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/plans");
//         const allPlans = res.data.data || res.data;

//         // filter plans
//         const filtered = allPlans.filter(
//           (p) =>
//             p.category === category &&
//             p.citizenship === citizenship &&
//             (p.category !== "visa" || p.visaCountry === visaCountry)
//         );

//         setPlans(filtered);
//       } catch (err) {
//         console.error("❌ Error fetching plans:", err);
//       }
//     };

//     fetchPlans();
//   }, [category, citizenship, visaCountry]);

//   const handleSelectPlan = (planId, subName) => {
//     // pass also the subCategory name so we know which user selected
//     navigate(`/apply/${planId}?sub=${subName}`);
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-blue-900 mb-6">
//         Available Plans for {category} ({citizenship})
//       </h2>

//       {plans.length > 0 ? (
//         <div className="grid md:grid-cols-2 gap-6">
//           {plans.map((plan) =>
//             plan.subCategories.map((sub, idx) => (
//               <div
//                 key={plan._id + idx}
//                 className="border rounded-xl shadow-md p-5 bg-white hover:shadow-lg transition"
//               >
//                 <h3 className="text-xl font-bold text-blue-800 mb-2">
//                   {plan.category} – {sub.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-3">
//                   Citizenship: {plan.citizenship}
//                   {plan.category === "visa" &&
//                     ` | Visa Country: ${plan.visaCountry}`}
//                 </p>

//                 <div className="space-y-2 text-gray-700">
//                   <p>
//                     <strong>Validity:</strong> {sub.validity}
//                   </p>
//                   <p>
//                     <strong>Government Fees:</strong> ₹{sub.govtFees}
//                   </p>
//                   <p>
//                     <strong>Our Fees:</strong> ₹{sub.ourFees}
//                   </p>
//                   <p className="text-lg font-semibold text-blue-700">
//                     Total: ₹{sub.totalFees}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => handleSelectPlan(plan._id, sub.name)}
//                   className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700"
//                 >
//                   Select {sub.name} Plan
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       ) : (
//         <p className="text-gray-600">No plans found for your selection.</p>
//       )}
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FileText, DollarSign, Clock, CheckCircle } from "lucide-react";

export default function PlansPage() {
  const [plans, setPlans] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const category = searchParams.get("category");
  const citizenship = searchParams.get("citizenship");
  const visaCountry = searchParams.get("visaCountry");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/plans");
        const allPlans = res.data.data || res.data;

        // filter plans
        const filtered = allPlans.filter(
          (p) =>
            p.category === category &&
            p.citizenship === citizenship &&
            (p.category !== "visa" || p.visaCountry === visaCountry)
        );

        setPlans(filtered);
      } catch (err) {
        console.error("❌ Error fetching plans:", err);
      }
    };

    fetchPlans();
  }, [category, citizenship, visaCountry]);

  const handleSelectPlan = (planId, subName) => {
    navigate(`/apply/${planId}?sub=${subName}`);
  };

  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-900 drop-shadow-sm">
          Available Plans for{" "}
          <span className="text-orange-500 capitalize">{category}</span>
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Citizenship: <span className="font-semibold">{citizenship}</span>{" "}
          {category === "visa" && (
            <>
              | Visa Country:{" "}
              <span className="font-semibold">{visaCountry}</span>
            </>
          )}
        </p>
      </div>

      {/* PLANS GRID */}
      {plans.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) =>
            plan.subCategories.map((sub, idx) => (
              <div
                key={plan._id + idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-5 rounded-t-2xl">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    {plan.category} – {sub.name}
                  </h3>
                  <p className="text-sm opacity-80 mt-1">
                    Citizenship: {plan.citizenship}
                    {plan.category === "visa" &&
                      ` | Visa Country: ${plan.visaCountry}`}
                  </p>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-6 space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <strong>Validity:</strong> {sub.validity} Years
                  </p>
                  <p className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <strong>Government Fees:</strong> ₹{sub.govtFees}
                  </p>
                  <p className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <strong>Our Fees:</strong> ₹{sub.ourFees}
                  </p>
                  <p className="text-lg font-bold text-blue-800 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Total: ₹{sub.totalFees}
                  </p>
                </div>

                {/* CTA */}
                <div className="p-5">
                  <button
                    onClick={() => handleSelectPlan(plan._id, sub.name)}
                    className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition"
                  >
                    Select {sub.name} Plan
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="text-center bg-white shadow-md rounded-xl p-10">
          <p className="text-gray-600 text-lg">
            ❌ No plans found for your selection.  
            Try changing your search filters.
          </p>
        </div>
      )}
    </div>
  );
}
