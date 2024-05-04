import Image from "next/image";
import Head from "next/head";
import 'flowbite';

export default function Home() {
  return (
    <>
      <div className="Main flex flex-col">
          <div className="drumMachiene">
            <h1>Drum Machiene</h1>
            <div className="drummachieneBoxes display">Display Box</div>

            <div className="drummachieneBoxes butt_view">

              <div className="player_controls">
                <div className="toggle">
                <label class="inline-flex items-center me-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer"/>
                  <div class="relative w-11 h-6 bg-black rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Power</span>
                </label>
                </div>
                <div className="musicControl">
                <input type="range" class="appearance-none w-full h-3 bg-gray-200 rounded-full outline-none" />
                </div>
              </div>
              
              <div className="keyboard_or_clicks_controls">
                <div className="btnforplaymus">A</div>
                <div className="btnforplaymus">S</div>
                <div className="btnforplaymus">D</div>
                <div className="btnforplaymus">F</div>
                <div className="btnforplaymus">G</div>
                <div className="btnforplaymus">H</div>
                <div className="btnforplaymus">J</div>
                <div className="btnforplaymus">K</div>
                <div className="btnforplaymus">L</div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
