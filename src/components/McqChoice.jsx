import React, { useState, useEffect } from 'react'

export default function McqChoice() {

    return (
        <div className="flex border border-solid border-black w-160 pl-4 items-center rounded-lg mt-4">
            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-1.5 w-8 h-4" />
            <label for="html">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae ex commodi asperiores iusto unde quae voluptatibus? Obcaecati ipsum velit in facilis vel sit quos nulla quam dolorem non saepe, earum sed magni. In alias, animi unde vero expedita fugiat optio autem nisi, reiciendis quod voluptatibus quasi magnam nostrum eligendi!</label>
        </div>
    )
}

