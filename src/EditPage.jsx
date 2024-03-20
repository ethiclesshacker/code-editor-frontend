import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import axios from "axios";

export default function EditPage() {
    return (
        <div className="w-[100%] h-[100%] grid grid-cols-10">
            <div className="col-start-1 col-span-2 border border-solid border-black center">
                <p className="text-4xl w-full font-bold p-4">
                    Edit Profile
                </p>
                {/* <img src="C:\Users\91947\OneDrive\Desktop\Project\code-editor-frontend\src\components\Images\Fifth.jpg" className='w-full h-full rounded-t-lg'></img> */}
            </div>
            <div className="col-start-3 col-span-8 border border-solid border-black p-4">
            <div className="grid grid-cols-"></div>
                <div className="flow-root">
                    <p className="text-2xl float-left">
                        Personal Details
                    </p>
                    <button className="float-right w-36 h-14 border border-solid border-[#005aad] rounded-lg text-[#005aad] text-xl bg-white">
                        Save Changes
                    </button>
                </div>
                <div className="ml-8 inline-grid grid-cols-3 gap-4 mt-4">
                    <label className="w-80 text-xl"> First Name </label>
                    <label className="w-80 ml-1 text-xl"> Middle Name </label>
                    <label className="w-80 ml-1 text-xl"> Last Name </label>
                </div>
                <div className="inline-grid grid-cols-3 gap-6 ml-6">
                    <pre className="w-80 h-14 border border-solid border-black rounded-lg bg-white"></pre>
                    <pre className="w-80 h-14 border border-solid border-black rounded-lg bg-white"></pre>
                    <pre className="w-80 h-14 border border-solid border-black rounded-lg bg-white"></pre>
                </div>
                <div className="ml-8 inline-grid grid-cols-3 gap-4 mt-4 ml-8">
                    <label className="w-96 text-xl">Email</label>
                    <label className="w-96 text-xl">Phone No.</label>
                </div>
                <div className="inline-grid grid-cols-3 gap-6 ml-6">
                    <input className="w-96 h-14 border border-solid border-black rounded-lg bg-white" disabled></input>
                    <input className="w-96 h-14 border border-solid border-black rounded-lg bg-white" disabled></input>
                </div>
                <div className="ml-8 inline-grid grid-cols-3 gap-4 mt-4 ml-8">
                    <label className="w-96 text-xl">University Name</label>
                    <label className="w-96 text-xl">College Name</label>
                </div>
                <div className="inline-grid grid-cols-3 gap-6 ml-6">
                    <pre className="w-96 h-14 border border-solid border-black rounded-lg bg-white"></pre>
                    <pre className="w-96 h-14 border border-solid border-black rounded-lg bg-white"></pre>
                </div>
                <div className="ml-8 inline-grid grid-cols-3 gap-4 mt-4 ml-8">
                    <label className="w-96 text-xl">Course</label>
                    <label className="w-96 text-xl">Semester</label>
                </div>
                <div className="inline-grid grid-cols-3 gap-6 ml-6">
                    <pre className="w-96 h-14 border border-solid border-black rounded-lg bg-white"></pre>
                    <input className="w-96 h-14 border border-solid border-black rounded-lg bg-white" disabled></input>
                </div>
                <div className="ml-8 inline-grid grid-cols-3 gap-4 mt-4 ml-8">
                    <label className="w-96 text-xl">Roll No.</label>
                    <label className="w-96 text-xl">Registration No.</label>
                </div>
                <div className="inline-grid grid-cols-3 gap-6 ml-6">
                    <pre className="w-96 h-14 border border-solid border-black rounded-lg bg-white"></pre>
                    <pre className="w-96 h-14 border border-solid border-black rounded-lg bg-white"></pre>
                </div>
            </div>
        </div>
    );
}
