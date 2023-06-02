


function Form() {
    return (
        <div>
            <form>
                <legend>Your recipe</legend>

                <label for='name'>Name</label>
                <input id='name' type="text" />

                <label for='imageUpload'>Image</label>
                <input type="file" id="imageUpload" accept="image/*"/>

                <label for='summary'>Summary</label>
                <textarea name="summary" id="summary" cols="30" rows="10"></textarea>

                <label for='score'>healt Score</label>
                <input id="score" type="number" min='0' />

                <label for="stepToStep">Step to Step</label>
                <textarea name="stepToStep" id="stepToStep" cols="30" rows="10"></textarea>
                
                <select name="diet" id="diet">
                    <option value="diets">diets</option>
                </select>
            </form>
        </div>
    );
}

export default Form;