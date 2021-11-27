import React,{useRef} from 'react'
import Product from './Product'
function Sidebar() {
    const novelCategory = async (e) => {
        const checked = e.target.checked;
        if(checked) {
            console.log("checked")
        }
        else {
            console.log("not checked")
        }
    }

    return (
        <aside className = "sticky self-start  top-4 w-1/6">
            <div className="space-y-2 mx-12 my-6">
                <h1 className = " font-semibold text-lg ">FILTERS</h1>
                <h2 className = " font-semibold text-lg text-gray-500">Categories</h2>
                <div className="flex flex-col">
                    {/* <label class="inline-flex items-center mt-3">
                        <input type="checkbox" class=" h-5 w-5 text-gray-600 "  />
                        <span class="ml-2 text-gray-700">All Books</span>
                    </label> */}
                    <label class="inline-flex items-center mt-3">
                        <input type="checkbox" class=" h-5 w-5 text-gray-600 " onClick = {novelCategory}  />
                        <span class="ml-2 text-gray-700">Novel</span>
                    </label>
                    <label class="inline-flex items-center mt-3">
                        <input type="checkbox" class=" h-5 w-5 text-gray-600 "  />
                        <span class="ml-2 text-gray-700">Enginnering</span>
                    </label>
                    <label class="inline-flex items-center mt-3">
                        <input type="checkbox" class=" h-5 w-5 text-gray-600 "  />
                        <span class="ml-2 text-gray-700">IIT-JEE</span>
                    </label>
                    <label class="inline-flex items-center mt-3">
                        <input type="checkbox" class=" h-5 w-5 text-gray-600 "  />
                        <span class="ml-2 text-gray-700">Civil Exams</span>
                    </label>
                    <label class="inline-flex items-center mt-3">
                        <input type="checkbox" class=" h-5 w-5 text-gray-600 "  />
                        <span class="ml-2 text-gray-700">Autobiography</span>
                    </label>
                </div>
		    </div>
        </aside>
    )
}

export default Sidebar