import { useState, useEffect } from 'react';
const List = ({db}) => {
    const [eventData,setEventData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchEvents = async () => {
        setLoading(true)
        let res = await db.fetch();
        let allItems = res.items;
        while (res.last){
            res = await db.fetch({}, {last: res.last});
            allItems = allItems.concat(res.items);
            }
        setEventData(allItems)
        setLoading(false)
        }
        fetchEvents()
    },[])

        const HelpList = eventData.map((item,index) => {
        if(!loading){
            return <div className="helplist" key={index}><h2>{item.name}</h2><h5>{item.email}</h5><h5>{item.message}</h5></div>}
        else{
            return <h5>Loading</h5>
        }
        });
    return HelpList;
}

export default List;