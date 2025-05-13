
// Metric calculations

function metricDoCalculations() {
    let metricWeight = document.getElementById("metricWeightInput").value;
    let metricHeight = document.getElementById("metricHeightInput").value;

    let metricBMI = (metricWeight / (metricHeight / 100) **2); 
    
    document.getElementById("metricGuideHeading").innerHTML = `Your BMI is: ${metricBMI.toFixed(2)}`;

    if (metricBMI < 18.5) {
        document.getElementById("metricBmiResultmessage").innerHTML = "Your BMI suggests you are in the underweight range category.";
        updateBMIImage("underweight");
    } else if (metricBMI >= 18.5 && metricBMI <= 24.9) {
        document.getElementById("metricBmiResultmessage").innerHTML = "Your BMI suggests you are in the healthy weight range category.";
        updateBMIImage("healthy");
        blaskConfetti();

    }  else if (metricBMI >= 25 && metricBMI <= 29.9) {
        document.getElementById("metricBmiResultmessage").innerHTML = "Your BMI suggests you are in the overweight range category.";
        updateBMIImage("overweight");
    } 
    else {
        document.getElementById("metricBmiResultmessage").innerHTML = "Your BMI suggests you are in the obese range category.";
        updateBMIImage("obese");
    }

}

// imperial calculations 

function imperialDoCalculations() {
    let imperialWeight = document.getElementById("imperialPoundsInput").value;
    let imperialHeight = document.getElementById("imperialInchesInput").value;

    let imperialBMI = (imperialWeight / (imperialHeight * imperialHeight) * 703); 
    
    document.getElementById("imperialGuideHeading").innerHTML = `Your BMI is: ${imperialBMI.toFixed(2)}`;

    if (imperialBMI < 18.5) {
        document.getElementById("imperialBmiResultmessage").innerHTML = "Your BMI suggests you are in the underweight range category.";
        updateBMIImage("underweight");
    } else if (imperialBMI >= 18.5 && imperialBMI <= 24.9) {
        document.getElementById("imperialBmiResultmessage").innerHTML = "Your BMI suggests you are in the healthy weight range category.";
        updateBMIImage("healthy");
        blaskConfetti();
        

    } else if (imperialBMI >= 25 && imperialBMI <= 29.9) {
        document.getElementById("imperialBmiResultmessage").innerHTML = "Your BMI suggests you are in the overweight range category.";
         updateBMIImage("overweight");

    }

    else {
        document.getElementById("imperialBmiResultmessage").innerHTML = "Your BMI suggests you are in the obese range category.";
        updateBMIImage("obese");
    }

}




// one imperial radio button press remove metric height and weight inputs and add imperials

function removeMetric() {
    document.getElementById("heightMetric").style.display = "none";
    document.getElementById("weightMetric").style.display = "none";
    document.getElementById("metricCalcBtn").style.display = "none";
};

function revealImperial() {
    document.getElementById("heightImperial").style.display = "flex";
    document.getElementById("weightImperial").style.display = "flex";
    document.getElementById("imperialCalcBtn").style.display = "inline";
};


function removeImperial() {
    document.getElementById("heightImperial").style.display = "none";
    document.getElementById("weightImperial").style.display = "none";
    document.getElementById("imperialCalcBtn").style.display = "none";
};


function revealMetric() {
    document.getElementById("heightMetric").style.display = "flex";
    document.getElementById("weightMetric").style.display = "flex";
    document.getElementById("metricCalcBtn").style.display = "inline";
};



// reset button function

function reload() {
    window.location.reload();

}


// Change images

function updateBMIImage(category) {
    const defaultImage = document.querySelector(".meaning-img .default");
    const lowBMIImage = document.querySelector(".meaning-img .low-bmi");
    const healthyBMIImage = document.querySelector(".meaning-img .okay-bmi");
    const highBMIImage = document.querySelector(".meaning-img .high-bmi");

    // all images hidden to begin with

    defaultImage.style.display = "none";
    lowBMIImage.style.display = "none";
    healthyBMIImage.style.display = "none";
    highBMIImage.style.display = "none";

    // Only the relevant image based on BMI category
    switch (category) {
        case "underweight":
            lowBMIImage.style.display = "block";
            break;
        case "healthy":
            healthyBMIImage.style.display = "block";
            break;
        case "overweight":
        case "obese":
            highBMIImage.style.display = "block";
            break;
        default:
            defaultImage.style.display = "block";
            break;
    }
}


// reveal weight ranges

function weightRanges() {
    document.getElementById("weightRanges").style.display = "block";
}

//animated confetti

const blaskConfetti = ()=> {

const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}