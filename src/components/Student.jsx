function Student({std}){
    const {name, age, address, phone} = std;

    return(
        <div>
            <b>{name}({age})</b><span>{phone}</span><span>{address}</span>
        </div>
    )
}

export default Student;