
export function Post (props){

    const {cb, name, del, id} = props;
    return <h2>{name}  <button onClick={() => del(id)}>delete</button></h2>
}