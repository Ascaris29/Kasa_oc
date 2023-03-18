const { idUrl } = useParams();
const BASE_URL = useContext(UrlApiContext);
const[data, setData] = useState();
const navigate = useNavigate()


export default function UseFetchDataById(){


    
    useEffect(() => {
        async function getDataById(){
                 const response = await axios.get(BASE_URL);
                 const dataCurrentId = await response.data.find(i => i.id === idUrl);
                 response.data.map(() => setData(dataCurrentId));
                if (dataCurrentId === undefined){
                    navigate("/404");
                }           
        }
    getDataById()
    
    }, [idUrl, navigate, BASE_URL]);
}
