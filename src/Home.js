const Home = () => {

    const handleclick = () => {
        console.log('hello ninja');
    }

    const handleclickAgain = (name) => {
        console.log('hello ' + name);
    }

    const eventhandle = (name, e) => {
        console.log('hello ' + name + 'e' + e.target);
    }

    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleclick}>Click Me</button>
            <button onClick={() => handleclickAgain('mithila')}>Click Me Again</button>
            <button onClick={(e) => eventhandle('lishan', e)}>Click</button>
        </div>
    );
}
 
export default Home;