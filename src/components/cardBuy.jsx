
function Card() {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src="/assets/image_2.jpg" alt="Mi imagen" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mi título</div>
        <p className="text-gray-700 text-base">
          Mi descripción
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
      </div>
    </div>

  )
}

export default Card