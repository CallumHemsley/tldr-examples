import React from 'react';
import Dropzone from 'react-dropzone'
import Axios from 'axios';

const dropzoneStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};


function App() {
  function onImageDrop(acceptedFiles) {
    console.log("ACCEPTED")
    const imageFile = acceptedFiles[0]; //We only accept one file.
    console.log(imageFile);

    //First, split into FormData..
    const fd = new FormData();
    fd.append('image', imageFile);
    fd.append('name', "Callum");

    const config = {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    };

    const url = "http://localhost:3001/images";

    return Axios.post(
      url, fd, config
    )
      .then(response => {
        console.log(response);
        //SUCCESS. posted to backend.
      })
      .catch(error => {
        console.log(error);
        //ERROR, something went wrong.
      })
      
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <Dropzone 
          onDropAccepted={(acceptedFile) => onImageDrop(acceptedFile)}
          onDropRejected={() => console.log("NOT ACCEPTED")}
          multiple={false}
          accept="image/*"
        >
          {({getRootProps, getInputProps}) => (
            <section 
              style={dropzoneStyle}
            >
              <div {...getRootProps()} >
                  <input {...getInputProps()} />
                  <p>Drop an image or click to upload</p>
              </div>
            </section>
          )}
        </Dropzone>
      </header>
    </div>
  );
}

export default App;
