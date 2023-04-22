function calculateAverage() {
    let prelimGrade = parseFloat(document.getElementById("prelimGrade").value);
    let midtermGrade = parseFloat(document.getElementById("midtermGrade").value);
    let finalsGrade = parseFloat(document.getElementById("finalsGrade").value);
    let averageGrade = (prelimGrade + midtermGrade + finalsGrade) / 3;
    
    if(averageGrade>=96){
    
        let averageBox = document.getElementById("averageBox");
        averageBox.innerHTML = "Excellent: your Average is : " + averageGrade.toFixed(2) +" or 1.00";
        averageBox.style.display = "block";
    }
  
    else if (averageGrade >= 94) {
        
        let averageBox = document.getElementById("averageBox");
        averageBox.innerHTML = "Very Good: your Average is   " + averageGrade.toFixed(2)+" or 1.25";
        averageBox.style.display = "block";
        }

        else if (averageGrade >= 91) {
            let averageBox = document.getElementById("averageBox");
            averageBox.innerHTML = "Very Good: your Average is   " + averageGrade.toFixed(2)+" or 1.50";
            averageBox.style.display = "block";
            averageBox.style.backgroundColor = "#aef0c7";
            }
    

            else if (averageGrade >= 88) {
                let averageBox = document.getElementById("averageBox");
                averageBox.innerHTML = "Good: your Average is   " + averageGrade.toFixed(2)+" or 1.75";
                averageBox.style.display = "block";
                averageBox.style.backgroundColor = "#aef0c7";
                }


                else if (averageGrade >= 85) {
                    let averageBox = document.getElementById("averageBox");
                    averageBox.innerHTML = "Good: your Average is   " + averageGrade.toFixed(2)+" or 2.00";
                    averageBox.style.display = "block";
                    averageBox.style.backgroundColor = "#aef0c7";
                    }

                    else if (averageGrade >= 83) {
                        let averageBox = document.getElementById("averageBox");
                        averageBox.innerHTML = "Good: your Average is   " + averageGrade.toFixed(2)+" or 2.25";
                        averageBox.style.display = "block";
                        averageBox.style.backgroundColor = "#aef0c7";
                        }
                        else if (averageGrade >= 80) {
                            let averageBox = document.getElementById("averageBox");
                            averageBox.innerHTML = "Fair: your Average is   " + averageGrade.toFixed(2)+" or 2.50";
                            averageBox.style.display = "block";
                            averageBox.style.backgroundColor = "#aef0c7";
                            }
                            else if (averageGrade >= 78) {
                                let averageBox = document.getElementById("averageBox");
                                averageBox.innerHTML = "Fair: your Average is   " + averageGrade.toFixed(2)+" or 2.75";
                                averageBox.style.display = "block";
                                averageBox.style.backgroundColor = "#aef0c7";
                                }
                                else if (averageGrade >= 75) {
                                    let averageBox = document.getElementById("averageBox");
                                    averageBox.innerHTML = "Pass: your Average is   " + averageGrade.toFixed(2)+" or 3.00";
                                    averageBox.style.display = "block";
                                    averageBox.style.backgroundColor = "#aef0c7";
                                    }
                                    else if (averageGrade >=10 && averageGrade <=74.99  ) {
                                        let averageBox = document.getElementById("averageBox");
                                        averageBox.innerHTML = "Failure: your Average is   " + averageGrade.toFixed(2)+" or 5.00";
                                        averageBox.style.display = "block";
                                        averageBox.style.backgroundColor = "salmon";
                                        }
    
                                        else
                                        {
                                            let averageBox = document.getElementById("averageBox");
                                            averageBox.innerHTML = "Your Average is " + averageGrade.toFixed(2);
                                            averageBox.style.display = "block";
                                        }
  }


  function resetForm() {
    document.getElementById("prelimGrade").value = "";
    document.getElementById("midtermGrade").value = "";
    document.getElementById("finalsGrade").value = "";
    document.getElementById("averageBox").innerHTML = "";
    document.getElementById("averageBox").style.display = "none";
  }