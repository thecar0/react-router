import { useState } from "react";
import { student, students } from "../data/data";
import Student from "./Student";
function Comp1(){
    // 외부에서 가져온 students 값을 useState로 구성하면
    // users에서 한 추가, 수정, 삭제 가능
    const [studentsall, setStudentsall] = useState();
    
    return(  
        <div className="comp comp1">
            <h2>Comp1.jsx Area</h2>
            {/* <h3>
                {student.name}
                ({student.age}) 
                / ({student.phone}) 
                / ({student.address})
            </h3> */}
           
            <Student std={student} />

            <h3>students attay 가져오기</h3>

            {/* students 배열의 내용을 map으로 <Student />호출 출력 */}
            {
                studentsall.map((s,i) => <Student std={s} key={i} />)
            }
        </div>
    )
}

export default Comp1;