import { NextResponse } from "next/server";

export async function GET(request) {
    const musicData = [
        {
            "id": 1, "key": "a", "music_url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","label": "Heater-1"
        },
        {
            "id": 2, "key": "s", "music_url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3","label": "Heater-2"
        },
        {
            "id": 3, "key": "d", "music_url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","label": "Heater-3"
        },
        {
            "id": 4, "key": "f", "music_url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3","label": "Heater-4"
        },
        {
            "id": 5, "key": "g", "music_url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","label": "Clap"
        },
        {
            "id": 6, "key": "h", "music_url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","label": "Open-HH"
        },
        {
            "id": 7, "key": "j", "music_url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","label": "Kick-n'-Hat"
        },
        {
            "id": 8, "key": "k", "music_url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","label": "Kick"
        },
        {
            "id": 9, "key": "l", "music_url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","label": "Closed-HH"
        },
    
    ];
    return NextResponse.json( musicData );
}