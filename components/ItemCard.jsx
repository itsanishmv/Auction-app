const ItemCard = () => {
    return (
        <div className="container mx-auto box-border h-90 md:w-48 sm:w-max p-4 bg-slate-200 rounded-lg flex md:flex-col gap-4">
            <div className=" w-40 h-40 aspect-square bg-white rounded-lg"></div>
            <div className="item-info flex flex-col">
                <h3 className="text-2xl font-bold">Item name</h3>
                <h5 className="text-lg font-semibold">Starts @ Rs 500</h5>
                <p className="text-base font-thin">Description goes here like this and that</p>
                <button className="rounded-lg bg-white p-2 mt-auto">Bid now</button>
            </div>
        </div>
    )
}

export default ItemCard;