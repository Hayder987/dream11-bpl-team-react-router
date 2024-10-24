


const AllPlayers = () => {
    return (
        <div className="px-3 lg:px-16">
            <div className="flex justify-between items-center py-4">
                <h1 className="text-xl md:text-3xl font-bold">Available Players</h1>
                <div className="flex gap-3">
                    <button className="border py-3 px-5 rounded-xl font-bold">Available</button>
                    <button className="border py-3 px-5 rounded-xl font-bold">Selected (0)</button>
                </div>
            </div>
            
        </div>
    );
};

export default AllPlayers;