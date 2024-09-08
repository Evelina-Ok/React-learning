export function ControlledForm () {
    const handleSubmit = ((event) => {
        event.preventDefault();
        console.log(event);
        
    })
    return (
        <section>
            <form>
                <label>First name</label>
                <input type="text" name="firstName"></input>

                <label>Last name</label>
                <input type="text" name="lasttName"></input>

                <label>Email</label>
                <input type="text" name="email"></input>
                <input type="submit" value="send"></input>
            </form>
        </section>
    );
}