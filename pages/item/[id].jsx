const ItemPage = () => {
    return (
        <div className="container mx-auto px-8 py-8 flex flex-col md:flex-row gap-4 h-screen"> 
            <div className="item-info w-full md:w-4/6">
                <div className="item-image bg-slate-500 w-1/4 aspect-square rounded-lg"></div>
                <div className="item-data py-8 flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">Item Name</h1>
                    <h2 className="text-xl font-normal">Description</h2>
                    <p className="text-2xl font-semibold">Bid starts @ Rs. 500</p>
                </div>
            </div>
            <div className="bidding-window p-4 w-full md:w-2/6 h-full bg-slate-400 rounded-lg flex flex-col">
                <div className="bids-placed py-4 grow mt-auto flex flex-col-reverse gap-2">
                        {
                            [1,2,3].map((bidId) => {
                                return (
                                    <div className="bid p-1.5 bg-white rounded-lg" key={bidId}>
                                        <h4 className="text-lg text-center font-bold">@username{bidId} bids Rs. 600</h4>
                                    </div>
                                )
                            })
                        }
                </div>
                <div className="new-bid mt-auto grow-0">
                    <div className="bid-input flex p-2">
                        <label className="text-lg text-center w-1/2 font-bold">Place Bid of</label>
                        <input className="w-1/2 rounded-lg p-1" type="number"/>
                    </div>
                    <button className="w-full bg-slate-300 text-center text-lg rounded-lg">Bid Now</button>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;
