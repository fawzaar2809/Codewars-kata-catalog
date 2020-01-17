function multipleOfIndex(array) {
    const temp = array.filter((value, index) =>
         (value % index ===0)
    );
  
    return temp;
  
  }