"use client";
import React, { useEffect, useState } from "react";
import $ from "jquery"
import 'flowbite';

export default function Home() {

  const [musiclabel, setMusicLabel] = useState("Display Box");
  
  let musicData = [];
  
  const [musicVolume, setMusicVolume] = useState(100);
  
  function  musicVolumefn(e) {
    let volume = e.target.value / 100;
    setMusicVolume(volume);
    console.log(volume);
  };

  fetch('/api/musicdata')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      musicData = data;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

  useEffect(() => {
    const keyToMusicIndex = {"a": 0, "A": 0,"s": 1, "S": 1,"d": 2, "D": 2,"f": 3, "F": 3,"g": 4, "G": 4,"h": 5, "H": 5,"j": 6, "J": 6,"k": 7, "K": 7,"l": 8, "L": 8};


  
    function playMusic(key) {
      const musicIndex = keyToMusicIndex[key];
      if (musicIndex !== undefined) {
        MusicPlayer(musicData[musicIndex]["music_url"], musicData[musicIndex]["label"]);
      } else {
        console.log("Key not mapped to any music track");
      }
    }
    


   window.addEventListener("keydown", function(e) {
    if ($('#powerBtn').prop('checked')) {
      playMusic(e.key);
  } else {
      console.log('Checkbox is not checked!');
  }
      
    });


    document.querySelector('.keyboard_or_clicks_controls').addEventListener('click', function(e) {
      if (e.target.classList.contains('btnforplaymus')) {
        if ($('#powerBtn').prop('checked')) {
          playMusic(e.target.getAttribute('data-key'));
      } else {
          console.log('Checkbox is not checked!');
      }
      }
    });



    function MusicPlayer(music_url, music_label) {
      let audio = new Audio(music_url);
      audio.play();
      audio.volume = musicVolume;
      setMusicLabel(music_label);
      console.log(music_label);
    }

  }, []);

  return (
    <>
      <div className="Main flex flex-col">
          <div className="drumMachiene">
            <h1>Drum Machiene</h1>
            <div className="drummachieneBoxes display" id="displayBox">{musiclabel}</div>

            <div className="drummachieneBoxes butt_view">

              <div className="player_controls">
                <div className="toggle">
                <label className="inline-flex items-center me-5 cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" id="powerBtn"/>
                  <div className="relative w-11 h-6 bg-black rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Power</span>
                </label>
                </div>
                <div className="musicControl">
                  <input type="range" className="appearance-none w-full h-3 bg-gray-200 rounded-full outline-none" value={musicVolume*100} onChange={musicVolumefn}/>
                </div>
              </div>
              
              <div className="keyboard_or_clicks_controls">
                <div className="btnforplaymus" data-key="A">A</div>
                <div className="btnforplaymus" data-key="S">S</div>
                <div className="btnforplaymus" data-key="D">D</div>
                <div className="btnforplaymus" data-key="F">F</div>
                <div className="btnforplaymus" data-key="G">G</div>
                <div className="btnforplaymus" data-key="H">H</div>
                <div className="btnforplaymus" data-key="J">J</div>
                <div className="btnforplaymus" data-key="K">K</div>
                <div className="btnforplaymus" data-key="L">L</div>
              </div>
              
            </div>

          </div>
      </div>
    </>
  );
}
