export default function Cartbar() {
	return (
		<div className="fixed bottom-0 left-60 right-0 bg-white shadow-lg p-4 flex justify-between items-center border-t">
			<div className="flex gap-2">
				<button className="px-4 py-2 rounded-xl bg-gray-200">Start over</button>
				<button className="px-4 py-2 rounded-xl bg-gray-200">Back</button>
			</div>
			<div className="flex items-center gap-4">
				<span className="font-semibold">Subtotal: 0 IDR</span>
				<button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-xl">
					Continue
				</button>
			</div>
		</div>
	);
}
