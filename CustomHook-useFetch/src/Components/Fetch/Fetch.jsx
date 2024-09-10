
 export const Fetch () {
    const url = `https://jsonplaceholder.typicode.com/users`;

    // const [userData, setUserData] = useState(null); when using null:
    // {userData?.map((user) => {
        
    const [userData, setUserData] = useState([]);

    function getAllUsers() {
        fetch(url)
        .then((res) => res.json())
        // .then ((data) => console.log("data", data)) log firstly to see data in the array
        .then((data) => setUserData(data))
        .catch((error) => console.error(error))
    }

        // useEffect syntax:
        // useEffect fetches all the data when website loads
        // useEffect(() => {})
    useEffect

     return (


    );
}