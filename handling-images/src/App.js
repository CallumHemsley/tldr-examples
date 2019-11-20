import React from 'react';
import Dropzone from 'react-dropzone'
import Axios from 'axios';
import './App.css';

function App() {
  function onImageDrop(acceptedFiles) {
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

    const url = "localhost:3001/HELLO";

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
          onDrop={acceptedFile => onImageDrop(acceptedFile)}
          multiple={false}
          accept="image/*"
        >
          {({getRootProps, getInputProps}) => (
            <section>
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
