import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import axios from "axios";

export default function EditPage() {
    return (
        <div className="w-[100%] h-[100%] grid grid-cols-10">
            <div className="col-start-1 col-span-2 border border-solid black center">
                <p className="text-4xl w-full font-bold p-4">
                    Edit Profile
                </p>
                <img src={images[currentImageIndex]} className='rounded-t-lg'></img>
            </div>
        </div>
    );
}