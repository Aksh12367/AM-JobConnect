
import Cards from "./components/Cards"

const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6U4pRN-hmnCKRp5bBpsxjHfbbutWDEgFRUo0YrTP2ag&s=10",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZEN2r056LDjjb6IT5qShwFPl4uJy1-BAgP0hGMmiqQ&s=10",
    name: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rApSjDXCOAsStw4_AN64xcOJJNOKor2lTOhPxChGPA&s=10",
    name: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$49/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10",
    name: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaHC_9YxqnPCCaadcefalsMg2EOkjYOedtUHk1DvhWQ&s=10",
    name: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzVOviVcRaYFMMrjFXN6UtlHTyK8TmEIeC19ES2xsgw&s=10",
    name: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$76/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HpwNmXWFlzj9jc93MKv78jSOvRtxfe8vKTRdsumXxQ&s=10",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7DcYnHS8qNNLtjecc_ymXKCMTQp9-wJRKZnjbgQ5fA&s=10",
    name: "Tesla",
    datePosted: "6 days ago",
    post: "Embedded Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$74/hr",
    location: "Austin, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEifGC0ccN8OIrNieADdKrYbPk0N91HQb2N8jx5eyWQ&s=10",
    name: "OpenAI",
    datePosted: "1 day ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "San Francisco, USA",
  },
];
const App = () => {
  return (
    <>
      <nav className="navbar">
        <h2>AM JobConnect</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Jobs</a>
          <a href="#">Companies</a>
          <a href="#">Contact</a>
        </div>

        <button>Login</button>
      </nav>
      <section className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Explore hundreds of job opportunities from top companies around the world.</p>
        <div className="search">
          <input type="text" placeholder="Search by company or role..."/>
          <button>Search</button>
        </div>
      </section>

      
      <section className="fil">
        <button>All Jobs</button>
        <button>Remote</button>
        <button>Full Time</button>
        <button>Part Time</button>
      </section>

      

      <div className="parent">
        {jobOpenings.map(function(ele,index){
        return <div key={index}>
        <Cards company={ele.name} datePosted={ele.datePosted} post={ele.post} tag1={ele.tag1}
        tag2={ele.tag2} pay={ele.pay} location={ele.location} brandlogo={ele.brandLogo}/> 
        </div>
      })}
      </div>
    </>
  )}

export default App;