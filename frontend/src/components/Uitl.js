class Util
{

  static isObjectEmpty=(obj) =>{
    return Object.keys(obj).length === 0;
  }

  static getUpdateArrayData=(data_array, new_data, new_data_id = '')=>{
    //debugger
    let foundNote = ((new_data_id==='') ? 
                    data_array.find(data=>data.id === new_data.id) : 
                    data_array.find(data=>data.id === new_data_id))


    let index = data_array.indexOf(foundNote);
    let newArray= [...data_array];
    newArray[index] = new_data;
    
    return newArray
}
}
  export default Util;