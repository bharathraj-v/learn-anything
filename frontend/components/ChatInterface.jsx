
const ChatInterface = () => {
    return (
        <div className="absolute mt-[3%] ml-[17%] h-[94%] overflow-scroll w-[83%]">
            <div className="fixed w-full  h-24 bottom-0">
            <div className="flex flex-row w-[83%] items-center h-full px-[16%] ">
                <div className="flex rounded-lg border-2 shadow-md border-[#919191] font-Inter border-opacity-50 w-[90%] h-12 px-4 justify-between bg-white items-center">
                    <textarea
                        placeholder="Send a message"
                        className="flex w-full h-11 justify-center items-center py-2 px-2  text-light  text-[#303030] rounded-md resize-none  outline-none" />
                    <span className="flex text-[#303030] ">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="5.41667"
                                cy="5.41664"
                                r="4.66667"
                                stroke="#ACACAC"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.625 8.8921L11.5417 11.8088"
                                stroke="#ACACAC"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
         

            </div>
        </div>
        <div className="flex ml-[10%] pb-24 pt-8 flex-col  w-[80%]   overflow-scroll">

            <div id="bot" className="flex py-6 flex-row  w-full">
                <div className = "flex h-10 w-10 bg-[#2890A7] rounded-full"> </div>
                <div className="flex px-5 py-3 text-justify leading-normal text-[#303030] ml-6 font-Inter w-[80%] bg-white rounded-lg" >
                To compute the element in the resulting matrix C at row i and column j, we perform a dot product between the i-th row of Matrix A and the j-th column of Matrix B. The dot product is obtained by multiplying corresponding elements in the row and column and summing them up.
Here's a step-by-step breakdown of the matrix multiplication process:
Verify compatibility: 
<br /> 
<br />
Ensure that the number of columns in Matrix A is equal to the number of rows in Matrix B. In other words, the inner dimensions should match (n in A and n in B). <br />
Determine the size of the resulting matrix: The resulting matrix C will have dimensions m × p, where m is the number of rows in A and p is the number of columns in B.<br />
Compute each element of C: To find the element at row i and column j in C, multiply the elements in the i-th row of A with the corresponding elements in the j-th column of B and sum them up.<br />
Let's say we want to compute the element C[i][j]. We iterate over the row i of A and the column j of B simultaneously, multiplying the elements and accumulating the sum. The formula for C[i][j] is:<br />
C[i][j] = A[i][1] * B[1][j] + A[i][2] * B[2][j] + ... + A[i][n] * B[n][j]<br />
Repeat the computation for each element in C: Repeat step 3 for every element in the resulting matrix C, filling it up with the calculated values.<br />
It's important to note that matrix multiplication is not commutative, meaning that the order of multiplication matters. In general, A * B ≠ B * A, unless both matrices are square and have the same dimensions.<br />
Matrix multiplication plays a fundamental role in linear transformations, solving systems of linear equations, calculating projections and rotations, and many other applications in mathematics and computer science.
                </div>
            </div>

            <div id="bot" className="flex py-6 justify-end flex-row  w-full">
                <div className="flex px-5 py-3 text-justify leading-normal text-[#303030] mr-6 font-Inter  bg-[#D9D9D9] rounded-lg" >
                What are its applications? What real world examples use this?                </div>
                <div className = "flex h-10 w-10 bg-gray-500 rounded-full"> </div>

            </div>
            <div id="bot" className="flex py-6 flex-row  w-full">
                <div className = "flex h-10 w-10 bg-[#2890A7] rounded-full"> </div>
                <div className="flex px-5 py-3 text-justify leading-normal text-[#303030] ml-6 font-Inter w-[80%] bg-white rounded-lg" >
                Matrix multiplication finds a wide range of real-life applications across diverse fields. In computer graphics, it is employed to manipulate and transform objects in three-dimensional space, enabling realistic rendering and animation. In data analysis and statistics, matrix multiplication facilitates the analysis of large datasets, enabling techniques such as linear regression, principal component analysis, and multivariate data analysis. Neural networks and machine learning heavily rely on matrix operations for training and inference, enabling tasks such as image recognition, natural language processing, and predictive modeling. In economics and finance, matrix multiplication is used for economic modeling, portfolio optimization, risk assessment, and input-output analysis. Transportation and logistics benefit from matrix multiplication for route optimization, resource allocation, and scheduling. In image and signal processing, matrices are utilized for operations such as image filtering, compression, and transformation, as well as in audio and video processing. In physics and engineering, matrix multiplication is essential for solving systems of linear equations, representing physical systems, simulating circuits, analyzing structures, and modeling quantum mechanics. These examples demonstrate the significant impact and wide-ranging utility of matrix multiplication in practical real-life applications.
                </div>
            </div>
    
        
        </div>
        
        </div>
    )
}

export default ChatInterface