export default function UserButton({ text }) {
  return (
    <button className="bg-white text-red-500 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
      {text}
    </button>
  );
}
