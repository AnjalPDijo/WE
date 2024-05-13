import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import{useNavigate} from 'react-router-dom';


import './Grading.css';

const GradingForm = () => {
  const [attendance, setAttendance] = useState('');
  const [discussionParticipation, setDiscussionParticipation] = useState('');
  const [cdsAdsParticipation, setCdsAdsParticipation] = useState('');
  const [unitParticipation, setUnitParticipation] = useState('');
  const [groupPerformance, setGroupPerformance] = useState('');
  const [leadership, setLeadership] = useState('');
  const [audit, setAudit] = useState('');
  const [expenditureIncome, setExpenditureIncome] = useState('');
  const [passbookMarking, setPassbookMarking] = useState('');
  const [gramasabhaAttendance, setGramasabhaAttendance] = useState('');
  const [selfDevelopment, setSelfDevelopment] = useState('');
  const [totalScore, setTotalScore] = useState(0);
  const [message, setMessage] = useState('');
  const [showLoanButton, setShowLoanButton] = useState(false); // State variable to control button visibility


  //const history = useHistory();

  const calculateScore = () => {
    let score = 0;

    const scores = {
      'attendance': { '10': 10, '8': 8, '6': 6, '4': 4 },
      'discussionParticipation': { '10': 10, '8': 6, '6': 4 },
      'cdsAdsParticipation': { '10': 10, '8': 8, '6': 4 },
      'unitParticipation': { '10': 10, '8': 8, '6': 4 },
      'groupPerformance': { '8': 8, '6': 6, '4': 4 },
      'leadership': { '10': 10, '8': 10 },
      'audit': { '10': 10, '8': 8, '4': 4 },
      'expenditureIncome': { '8': 8, '6': 6, '2': 2 },
      'passbookMarking': { '10': 10, '6': 6, '0': 0 },
      'gramasabhaAttendance': { '10': 10, '8': 8, '0': 0 },
      'selfDevelopment': { '8': 8, '5': 5, '1': 1 }
    };

    score += scores['attendance'][attendance];
    score += scores['discussionParticipation'][discussionParticipation];
    score += scores['cdsAdsParticipation'][cdsAdsParticipation];
    score += scores['unitParticipation'][unitParticipation];
    score += scores['groupPerformance'][groupPerformance];
    score += scores['leadership'][leadership];
    score += scores['audit'][audit];
    score += scores['expenditureIncome'][expenditureIncome];
    score += scores['passbookMarking'][passbookMarking];
    score += scores['gramasabhaAttendance'][gramasabhaAttendance];
    score += scores['selfDevelopment'][selfDevelopment];

    setTotalScore(score);
    // if (totalScore >= 80) {
    //     setMessage('YOU ARE ELIGIBLE FOR LOAN.');
    //     setShowLoanButton(true); // Set state to show the button
    //   } else {
    //     setMessage('YOU ARE NOT ELIGIBLE FOR LOAN.');
    //     setShowLoanButton(false); // Set state to hide the button
    //   }
    // };
  

    if (score >= 80) {
      setMessage('YOU ARE ELIGIBLE FOR LOAN.');
      alert('YOU ARE ELIGIBLE FOR APPLYING LOAN');
      setShowLoanButton(true); // Set state to show the butto
     
      //history.push('/loandetails'); // Redirect to loan details page
    } else {
      setMessage('YOU ARE NOT ELIGIBLE FOR LOAN.');
      alert('YOU ARE NOT ELIGIBLE TO APPLY FOR LOAN');
      setShowLoanButton(false); // Set state to hide the button
    }
  };

  return (
    <div className="grading-form-container">
      <h2 style={{marginRight: '30px'}}>Grading Form</h2>
      <div className="question">
        <label>Attendance:</label>
        <br></br>
        <input type="radio" name="attendance" value="10" onChange={(e) => setAttendance(e.target.value)} /> 95% - 100%<br></br>
        <input type="radio" name="attendance" value="8" onChange={(e) => setAttendance(e.target.value)} /> 85% - 94%<br></br>
        <input type="radio" name="attendance" value="6" onChange={(e) => setAttendance(e.target.value)} /> 75% - 84%<br></br>
        <input type="radio" name="attendance" value="4" onChange={(e) => setAttendance(e.target.value)} /> Below 75%<br></br>
      </div>
      <div className="question">
        <label>Participation in Discussions:</label>
        <br></br>
        <input type="radio" name="discussionParticipation" value="10" onChange={(e) => setDiscussionParticipation(e.target.value)} /> 95% - 100%<br></br>
        <input type="radio" name="discussionParticipation" value="8" onChange={(e) => setDiscussionParticipation(e.target.value)} /> 85% - 94%<br></br>
        <input type="radio" name="discussionParticipation" value="6" onChange={(e) => setDiscussionParticipation(e.target.value)} /> 75% - 84%<br></br>
      </div>
      <div className="question">
        <label>Participation in CDS-ADS Event:</label><br></br>
        <input type="radio" name="cdsAdsParticipation" value="10" onChange={(e) => setCdsAdsParticipation(e.target.value)} /> 95% - 100%<br></br>
        <input type="radio" name="cdsAdsParticipation" value="8" onChange={(e) => setCdsAdsParticipation(e.target.value)} /> 85% - 94%<br></br>
        <input type="radio" name="cdsAdsParticipation" value="6" onChange={(e) => setCdsAdsParticipation(e.target.value)} /> 75% - 84%<br></br>
      </div>
      <div className="question">
        <label>Individual Unit Participation:</label><br></br>
        <input type="radio" name="unitParticipation" value="10" onChange={(e) => setUnitParticipation(e.target.value)} /> 95% - 100%<br></br>
        <input type="radio" name="unitParticipation" value="8" onChange={(e) => setUnitParticipation(e.target.value)} /> 85% - 94%<br></br>
        <input type="radio" name="unitParticipation" value="6" onChange={(e) => setUnitParticipation(e.target.value)} /> 75% - 84%<br></br>
      </div>
      <div className="question">
        <label>Group Activities Performance:</label><br></br>
        <input type="radio" name="groupPerformance" value="8" onChange={(e) => setGroupPerformance(e.target.value)} /> 4 groups<br></br>
        <input type="radio" name="groupPerformance" value="6" onChange={(e) => setGroupPerformance(e.target.value)} /> 3 groups<br></br>
        <input type="radio" name="groupPerformance" value="4" onChange={(e) => setGroupPerformance(e.target.value)} /> 2 groups<br></br>
      </div>
      <div className="question">
        <label>Leaderships Taken:</label><br></br>
        <input type="radio" name="leadership" value="10" onChange={(e) => setLeadership(e.target.value)} /> 85% - 94%<br></br>
        <input type="radio" name="leadership" value="8" onChange={(e) => setLeadership(e.target.value)} /> 75% - 84%<br></br>
      </div>
      <div className="question">
        <label>Audit Done:</label><br></br>
        <input type="radio" name="audit" value="10" onChange={(e) => setAudit(e.target.value)} /> 3 years<br></br>
        <input type="radio" name="audit" value="8" onChange={(e) => setAudit(e.target.value)} /> 2 out of 3 years<br></br>
        <input type="radio" name="audit" value="4" onChange={(e) => setAudit(e.target.value)} /> 1 out of 3 years<br></br>
      </div>
      <div className="question">
        <label>Expenditure Income:</label><br></br>
        <input type="radio" name="expenditureIncome" value="8" onChange={(e) => setExpenditureIncome(e.target.value)} /> Up to date<br></br>
        <input type="radio" name="expenditureIncome" value="6" onChange={(e) => setExpenditureIncome(e.target.value)} /> 1 month lag<br></br>
        <input type="radio" name="expenditureIncome" value="2" onChange={(e) => setExpenditureIncome(e.target.value)} /> More than 1 month lag<br></br>
      </div>
      <div className="question">
        <label>Passbook Marking:</label><br></br>
        <input type="radio" name="passbookMarking" value="10" onChange={(e) => setPassbookMarking(e.target.value)} /> Every week<br></br>
        <input type="radio" name="passbookMarking" value="6" onChange={(e) => setPassbookMarking(e.target.value)} /> Every month<br></br>
        <input type="radio" name="passbookMarking" value="0" onChange={(e) => setPassbookMarking(e.target.value)} /> Rarely done<br></br>
      </div>
      <div className="question">
        <label>Gramasabha Attendance:</label><br></br>
        <input type="radio" name="gramasabhaAttendance" value="10" onChange={(e) => setGramasabhaAttendance(e.target.value)} /> Everyone is present<br></br>
        <input type="radio" name="gramasabhaAttendance" value="8" onChange={(e) => setGramasabhaAttendance(e.target.value)} /> Half is present<br></br>
        <input type="radio" name="gramasabhaAttendance" value="0" onChange={(e) => setGramasabhaAttendance(e.target.value)} /> Below half<br></br>
      </div>
      <div className="question">
        <label>Self Development:</label><br></br>
        <input type="radio" name="selfDevelopment" value="8" onChange={(e) => setSelfDevelopment(e.target.value)} /> 95% - 100%<br></br>
        <input type="radio" name="selfDevelopment" value="5" onChange={(e) => setSelfDevelopment(e.target.value)} /> 85% - 94%<br></br>
        <input type="radio" name="selfDevelopment" value="1" onChange={(e) => setSelfDevelopment(e.target.value)} /> 75% - 84%<br></br>
      </div>
      <button onClick={calculateScore} style={{ marginLeft: '250px' }}>Calculate Score</button>
      {totalScore > 0 && <p>Total Score: {totalScore}</p>}
      {message && <p>{message}</p>}
      
      {/* Conditionally render the "Click here" button */}
      {showLoanButton && (
        <div>
          <button>
            {/* <Link to="./loandetails">Click here to view loan details</Link> */}
            <a href="./api/upload">Click here to view loan details</a>
          </button>
        </div>
      )}
    </div>
  );
};


export default GradingForm;