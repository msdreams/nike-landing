/* eslint-disable react/prop-types */
export function Card({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} min-w-50 max-w-xl transform cursor-pointer transition hover:scale-105`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      
      <img
        className="absolute left-[40%] top-5 w-48"
        src={item.src}
      />
    </div>
  );
}