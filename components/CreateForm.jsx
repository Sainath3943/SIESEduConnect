import "@styles/canvas/create.css"


const CreateForm = ({type}) => {
  return (
    <>
        {/* <div className="form-container">
            <h1>New Course</h1>
            <form action="">
                
                <input name="courseTitle" type="text" placeholder='Course Title'/>
            </form>
        </div> */}

        {/* <div className="main-container"> */}
            <h1>Create {type} Form</h1>
            {/* enctype="multipart/form-data" */}
            <form action="" method="" >
                <label for="course_name">{type} Title:</label><br/>
                <input type="text" id="course_name" name="course_name" placeholder="Enter course Title"/>
                <br/><br/>

                <label for="course_desc">{type} Description:</label><br/>
                <textarea id="course_desc" name="course_desc" rows="4" cols="50"  placeholder="Enter course description..."></textarea><br/><br/>

                <label for="course_material">Attach {type} Material:</label><br/>
                <div id="file_inputs">
                    <input type="file" name="course_material[]" multiple accept=".pdf, .jpg, .png" required/><br/><br/>
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
                
                <input type="submit" value="Create Course"/>
            </form>
        {/* </div> */}
    </>
  )
}

export default CreateForm