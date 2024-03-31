import React from "react";
import { useState,useEffect } from "react";

const Branches = ()=>{

    return (
        <div className="main-container flex column">
            <div className="heading flex ">
                <h1>Branch</h1>
                <div>
                    <button>Create</button>
                </div>
            </div>
            <div className="table-container">
            <table>
                    <thead>
                        <tr>
                            <th>Branch ID</th>
                            <th>Branch Name</th>
                            <th>Address</th>
                            <th>Manager Email</th>
                            <th>Status</th>
                            <th>Capacity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    </table>
            </div>
         </div>
    )
}
export default Branches