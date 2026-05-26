import { useEffect, useState } from "react";

export default function Admin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "https://backend-app-123.fly.dev/api/orders"
      );

      const data = await response.json();

      setOrders(data.orders);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const toggleDelivered = async (id) => {
    try {
      await fetch(
        `https://backend-app-123.fly.dev/api/orders/${id}/delivered`,
        {
          method: "PATCH",
        }
      );

      setOrders((prev) =>
        prev.map((order) =>
          order._id === id
            ? {
                ...order,
                delivered: !order.delivered,
              }
            : order
        )
      );

    } catch (error) {
      console.log(error);
    }
  };

  const removeOrder = async (id) => {
    const confirmDelete =
      window.confirm("Delete this order?");

    if (!confirmDelete) return;

    try {
      await fetch(
        `https://backend-app-123.fly.dev/api/orders/${id}`,
        {
          method: "DELETE",
        }
      );

      setOrders((prev) =>
        prev.filter(
          (order) => order._id !== id
        )
      );

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-black mb-8">
          Orders Dashboard
        </h1>

        {loading ? (

          <p>Loading orders...</p>

        ) : (

          <div className="overflow-x-auto rounded-2xl border border-zinc-800">

            <table className="w-full">

              <thead className="bg-zinc-900">

                <tr>

                  <th className="p-4 text-left">
                    Date
                  </th>

                  <th className="p-4 text-left">
                    Name
                  </th>

                  <th className="p-4 text-left">
                    Phone
                  </th>

                  <th className="p-4 text-left">
                    State
                  </th>

                  <th className="p-4 text-left">
                    Qty
                  </th>

                  <th className="p-4 text-left">
                    Address
                  </th>

                  <th className="p-4 text-left">
                    Delivered
                  </th>

                  <th className="p-4 text-left">
                    Delete
                  </th>

                </tr>

              </thead>

              <tbody>

                {orders.map((order) => (

                  <tr
                    key={order._id}
                    className="border-t border-zinc-800"
                  >

                    <td className="p-4 text-sm text-zinc-400">
                      {new Date(
                        order.createdAt
                      ).toLocaleString()}
                    </td>

                    <td className="p-4">
                      {order.fullname}
                    </td>

                    <td className="p-4">
                      {order.phone}
                    </td>

                    <td className="p-4">
                      {order.state}
                    </td>

                    <td className="p-4">
                      {order.quantity}
                    </td>

                    <td className="p-4">
                      {order.address}
                    </td>

                    <td className="p-4">

                      <input
                        type="checkbox"
                        checked={order.delivered}
                        onChange={() =>
                          toggleDelivered(
                            order._id
                          )
                        }
                        className="w-5 h-5"
                      />

                    </td>

                    <td className="p-4">

                      <button
                        onClick={() =>
                          removeOrder(order._id)
                        }
                        className="
                        bg-red-600
                        hover:bg-red-500
                        px-4
                        py-2
                        rounded-lg
                        font-bold"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
}