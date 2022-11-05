import ItemCard from "../../components/ItemCard";

const Item = () => {
    return (
        <div className="items-page container mx-auto">
            <h2 className="text-3xl font-bold">Choose the item to bid for</h2>
            <div className="container mx-auto py-8">
                <div className="items-grid grid gap-12 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 grid-cols-1">
                    {[1,2,3,4,5,6,7,8,9,10].map((item) => {
                        return (
                            <ItemCard key={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Item;