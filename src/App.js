import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import './App.css';

function App() {
  const aminoKey = {
    "I": 4.5,
    "V": 4.2,
    "L": 3.8,
    "F": 2.8,
    "C": 2.5,
    "M": 1.9,
    "A": 1.8,
    "G": -0.4,
    "T": -0.7,
    "S": -0.8,
    "W": -0.9,
    "Y": -1.3,
    "P": -1.6,
    "H": -3.2,
    "E": 	-3.5,
    "Q": -3.5,
    "D": 	-3.5,
    "N": -3.5,
    "K": -3.9,
    "R": -4.5, 
  } 

  function calcHydrophobicity () {
    let residueS = "MAKATSGAAGLRLLLLLLLPLLGKVALGLYFSRDAYWEKLYVDQAAGTPLLYVHALRDAPEEVPSFRLGQHLYGTYRTRLHENNWICIQEDTGLLYLNRSLDHSSWEKLSVRNRGFPLLTVYLKVFLSPTSLREGECQWPGCARVYFSFFNTSFPACSSLKPRELCFPETRPSFRIRENRPPGTFHQFRLLPVQFLCPNISVAYRLLEGEGLPFRCAPDSLEVSTRWALDREQREKYELVAVCTVHAGAREEVVMVPFPVTVYDEDDSAPTFPAGVDTASAVVEFKRKEDTVVATLRVFDADVVPASGELVRRYTSTLLPGDTWAQQTFRVEHWPNETSVQANGSFVRATVHDYRLVLNRNLSISENRTMQLAVLVNDSDFQGPGAGVLLLHFNVSVLPVSLHLPSTYSLSVSRRARRFAQIGKVCVENCQAFSGINVQYKLHSSGANCSTLGVVTSAEDTSGILFVNDTKALRRPKCAELHYMVVATDQQTSRQAQAQLLVTVEGSYVAEEAGCPLSCAVSKRRLECEECGGLGSPTGRCEWRQGDGKGITRNFSTCSPSTKTCPDGHCDVVETQDINICPQDCLRGSIVGGHEPGEPRGIKAGYGTCNCFPEEEKCFCEPEDIQDPLCDELCRTVIAAAVLFSFIVSVLLSAFCIHCYHKFAHKPPISSAEMTFRRPAQAFPVSYSSSGARRPSLDSMENQVSVDAFKILEDPKWEFPRKNLVLGKTLGEGEFGKVVKATAFHLKGRAGYTTVAVKMLKENASPSELRDLLSEFNVLKQVNHPHVIKLYGACSQDGPLLLIVEYAKYGSLRGFLRESRKVGPGYLGSGGSRNSSSLDHPDERALTMGDLISFAWQISQGMQYLAEMKLVHRDLAARNILVAEGRKMKISDFGLSRDVYEEDSYVKRSQGRIPVKWMAIESLFDHIYTTQSDVWSFGVLLWEIVTLGGNPYPGIPPERLFNLLKTGHRMERPDNCSEEMYRLMLQCWKQEPDKRPVFADISKDLEKMMVKRRDYLDLAASTPSDSLIYDDGLSEEETPLVDCNNAPLPRALPSTWIENKLYGMSDPNWPGESPVPLTRADGTNTGFPRYPNDSVYANWMLSPSAAKLMDTFDS";
    let window = 7;    
    let vals = [];
    for (let i = 0; i < x.value.length; i++) {
      let c = i + Math.floor(window/2) + 1;
      vals.push(x.value.slice(i,i+window)
                        .split("")
                        .map((x)=>aminoKey[x])
                        .reduce((x,y)=>x+y));

    }
    alert(vals.toString());
  }
  let x = {}
  function handleChange (e) {
    x.value = e.target.value;
  }

  return (
    <div className="App">
      <TextField value={x.value} id="input" multiline onChange={handleChange} variant="outlined" type="text">TextField</TextField>
      <Button
        variant="contained"
        color="primary" 
        onClick={calcHydrophobicity}
      >
        Hello!
      </Button>
      <canvas id="graph" width="1000" height="1000"></canvas>
    </div>
  );
}

export default App;
