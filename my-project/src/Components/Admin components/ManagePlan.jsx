import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

function ManagePlan() {
  const [plans, setPlans] = useState([]);
  const [formData, setFormData] = useState(initialForm());
  const [editingPlan, setEditingPlan] = useState(null);

  function initialForm() {
    return {
      category: "",
      citizenship: "",
      visaCountry: "", // ✅ NEW for visa
      subCategories: [
        { name: "fresh", validity: "", govtFees: "", ourFees: "" },
        { name: "renewal", validity: "", govtFees: "", ourFees: "" },
        { name: "changes", validity: "", govtFees: "", ourFees: "" },
        { name: "lost-damaged", validity: "", govtFees: "", ourFees: "" },
      ],
    };
  }

  const fetchPlans = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/plans");
      setPlans(res.data.data || res.data);
    } catch (err) {
      console.error("❌ Error fetching plans:", err);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleChange = (e, index, field) => {
    const { value, name } = e.target;
    if (index !== undefined) {
      const updatedSubs = [...formData.subCategories];
      updatedSubs[index][field] = value;
      setFormData({ ...formData, subCategories: updatedSubs });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        category: formData.category,
        citizenship: formData.citizenship,
        ...(formData.category === "visa" && { visaCountry: formData.visaCountry }), // ✅ only if visa
        subCategories: formData.subCategories.map((sub) => ({
          ...sub,
          govtFees: Number(sub.govtFees) || 0,
          ourFees: Number(sub.ourFees) || 0,
          totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
        })),
      };

      if (editingPlan) {
        await axios.put(
          `http://localhost:5000/api/plans/${editingPlan._id}`,
          payload
        );
      } else {
        await axios.post("http://localhost:5000/api/plans", payload);
      }

      setFormData(initialForm());
      setEditingPlan(null);
      fetchPlans();
    } catch (err) {
      console.error("❌ Error saving plan:", err.response?.data || err.message);
    }
  };

  const handleEdit = (plan) => {
    setEditingPlan(plan);
    setFormData({
      category: plan.category,
      citizenship: plan.citizenship,
      visaCountry: plan.visaCountry || "",
      subCategories: plan.subCategories.map((sub) => ({
        name: sub.name,
        validity: sub.validity || "",
        govtFees: sub.govtFees || "",
        ourFees: sub.ourFees || "",
      })),
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this plan?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/plans/${id}`);
      fetchPlans();
    } catch (err) {
      console.error("❌ Error deleting plan:", err);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
        Manage Plans
      </h1>

      {/* -------- FORM -------- */}
      <div className="bg-white shadow-xl rounded-2xl p-6 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          {editingPlan ? "✏️ Edit Plan" : "➕ Create New Plan"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            {/* ✅ Category Dropdown */}
            <div>
              <label className="text-sm text-gray-600">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="p-2 border rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">-- Select Category --</option>
                <option value="passport">Passport</option>
                <option value="visa">Visa</option>
                <option value="oci">OCI</option>
              </select>
            </div>

            {/* ✅ Citizenship Dropdown */}
            <div>
              <label className="text-sm text-gray-600">Citizenship</label>
              <select
                name="citizenship"
                value={formData.citizenship}
                onChange={handleChange}
                className="p-2 border rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">-- Select Citizenship --</option>
                <option value="indian">Indian</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* ✅ Visa Country (only show if visa selected) */}
          {formData.category === "visa" && (
            <div>
              <label className="text-sm text-gray-600">Visa For Country</label>
              <select
                name="visaCountry"
                value={formData.visaCountry}
                onChange={handleChange}
                className="p-2 border rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">-- Select Country --</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="uae">UAE</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          {/* Subcategories */}
          <div>
            <h3 className="font-medium mb-3 text-gray-700">
              Subcategories & Fees
            </h3>
            {formData.subCategories.map((sub, index) => (
              <div
                key={sub.name}
                className="grid grid-cols-4 gap-4 mb-3 items-center bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <input
                  type="text"
                  value={sub.name}
                  disabled
                  className="p-2 border rounded-lg bg-gray-200 text-gray-700 font-medium"
                />
                <input
                  type="text"
                  placeholder="Validity"
                  value={sub.validity}
                  onChange={(e) => handleChange(e, index, "validity")}
                  className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  placeholder="Govt Fees"
                  value={sub.govtFees}
                  onChange={(e) => handleChange(e, index, "govtFees")}
                  className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  placeholder="Our Fees"
                  value={sub.ourFees}
                  onChange={(e) => handleChange(e, index, "ourFees")}
                  className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition flex items-center gap-2 mx-auto"
          >
            <PlusCircle size={18} />
            {editingPlan ? "Update Plan" : "Add Plan"}
          </button>
        </form>
      </div>

      {/* -------- LIST OF PLANS -------- */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-5 text-gray-700">📋 All Plans</h2>
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-100 text-gray-800">
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Citizenship</th>
              <th className="p-3 text-left">Visa Country</th>
              <th className="p-3 text-left">Subcategories</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plans.length > 0 ? (
              plans.map((plan, idx) => (
                <tr
                  key={plan._id}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="p-3 font-medium text-gray-700">
                    {plan.category}
                  </td>
                  <td className="p-3">{plan.citizenship}</td>
                  <td className="p-3">
                    {plan.category === "visa" ? plan.visaCountry : "-"}
                  </td>
                  <td className="p-3 space-y-1">
                    {plan.subCategories?.map((sub) => (
                      <div
                        key={sub.name}
                        className="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-sm"
                      >
                        <span className="font-semibold capitalize">
                          {sub.name}:
                        </span>{" "}
                        {sub.validity && (
                          <span className="text-blue-600">({sub.validity})</span>
                        )}
                        <br />
                        Govt:{" "}
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md">
                          ₹{sub.govtFees}
                        </span>{" "}
                        | Our:{" "}
                        <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-md">
                          ₹{sub.ourFees}
                        </span>{" "}
                        | Total:{" "}
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-md">
                          ₹{sub.totalFees}
                        </span>
                      </div>
                    ))}
                  </td>
                  <td className="p-3 text-center flex gap-4 justify-center">
                    <button
                      onClick={() => handleEdit(plan)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit Plan"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(plan._id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete Plan"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No plans available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManagePlan;
