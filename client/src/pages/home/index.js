import { Helmet } from 'react-helmet'
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>home</title>
            </Helmet>
            <div className='row text-center'>
                <div className='col s8 text-center' style={{border:'1px solid red'}}>
                    <h4>About me:</h4>
                    <p>
                        I have been working as a developer since 2014 and I am passionate about programming. Over the years, 
                        I have gained experience in various programming languages and environments, including C#, Java, PHP, and JavaScript. 
                        In particular, I have been using JavaScript extensively and it has become my favorite language in recent years. 
                        I have worked on many projects using Node.js and I absolutely love it. 
                    </p>                  
                </div>
                <div className='col s4'>
                    <h4>weather today:  </h4>
                    <p> I will get this info from an weatherapi</p>
                </div>
            </div>
            <div className='row'>
                <div className='col s'>

                </div>
            </div>
        </div>
    )
}

export default Home;