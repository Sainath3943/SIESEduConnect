import "@styles/canvas/create.css"


const LabForm = () => {
  return (
    <>
        {/* <div className="form-container">
            <h1>New Lab</h1>
            <form action="">
                
                <input name="LabTitle" type="text" placeholder='Lab Title'/>
            </form>
        </div> */}

        {/* <div className="main-container"> */}
            <h1>Create Lab Form</h1>
            {/* enctype="multipart/form-data" */}
            <form action="" method="" >
                <label for="Lab_name">Lab Title:</label><br/>
                <input type="text" id="Lab_name" name="Lab_name" placeholder="Enter Lab Title"/>
                <br/><br/>

                <label for="Lab_desc">Lab Description:</label><br/>
                <textarea id="Lab_desc" name="Lab_desc" rows="4" cols="50"  placeholder="Enter Lab description..."></textarea><br/><br/>

                <label for="Lab_material">Attach Lab Material:</label><br/>
                <div id="file_inputs">
                    <input type="file" name="Lab_material[]" multiple accept=".pdf, .jpg, .png" required/><br/><br/>
                </div>
                <div id="selected_files"></div><br/>
                {/* <button type="button" onclick="addFileInput()">Add Another File</button> */}
                <br/><br/>

                <label>Add Students:</label>
                <br/>
                <div id="students_display"></div>
                <div>
                    <textarea id="new_student" rows="2" cols="30" placeholder="Enter email address"></textarea>
                    <button type="button" id="add_student_button">Add</button>
                </div><br/>
        
                <label for="student_list">Added Students:</label><br/>
                <textarea id="student_list" name="student_list" rows="4" cols="50" placeholder="Enter email addresses of students (separated by commas)" required></textarea><br/>
                <small>Separate email addresses with commas</small><br/><br/>
                
                <input type="submit" value="Create Lab"/>
            </form>
        {/* </div> */}
    </>
  )
}

export default LabForm