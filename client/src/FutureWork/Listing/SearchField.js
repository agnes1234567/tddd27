import React, { useEffect } from 'react'

function SearchField({setSearch}) {


  return (
      <div>Sökfält</div>
  )
}

export default SearchField

/*

      <div className='SearchField'>
          <form id="searchform">
              <div className='filterlist'>
                  <div className='filterheader'>
                      <h2>Filtrera sökning</h2>
                      <button>Rensa</button>
                  </div>
                  <div class="always_visible">
                    <legend class="grouplabel">Välj nivå</legend>
                        <div class="radiobutton push">
                            <input type="radio" id="typeboth" name="type" value=""/>
                            <label for="typeboth">Båda</label>
                            <input type="radio" id="typecourse" name="type" value="G"/>
                            <label for="typecourse">Grundläggande</label>
                            <input type="radio" id="typeprogram" name="type" value="A"/>
                            <label for="typeprogram">Avancerade</label>
                        </div>
                        <div className='coursecode'>
                            <label for="codeinput">Kurskod</label>
                            <input type="search" id="codeinput" name="codeinput" value="" 
                            autocomplete="off" placeholder="T.ex. TDDD27" maxlength="8" 
                            class="ui-autocomplete-input"/>   
                        </div>
                        <div className='coursename'>
                            <label for="nameinput">Kursnamn</label>
                            <input type="search" id="nameinput" name="nameinput" value="" 
                            autocomplete="off" placeholder="T.ex. Avancerad webbprogrammering" maxlength="8" 
                            class="ui-autocomplete-input"/>   
                        </div>
                        <legend class="grouplabel">Termin</legend>
                        <div class="radiobutton push">
                            <input type="radio" id="typeboth" name="type" value=""/>
                            <label for="typeboth">Båda</label>
                            <input type="radio" id="typecourse" name="type" value="courses"/>
                            <label for="typecourse">HT</label>
                            <input type="radio" id="typeprogram" name="type" value="programs"/>
                            <label for="typeprogram">VT</label>
                        </div>
                        <div>
                        <legend class="grouplabel">Block</legend>
                        <div class="checkbox">
                            <input type="checkbox" id="mod1" name="mod1" value=""/>
                            <label for="mod1">1</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="mod2" name="mod2" value=""/>
                            <label for="mod2">2</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="mod3" name="mod3" value=""/>
                            <label for="mod3">3</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="mod4" name="mod4" value=""/>
                            <label for="mod4">4</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="modfree" name="modfree" value=""/>
                            <label for="modfree">Blockfritt</label>
                        </div>
                        </div>
                        </div>
                        
              </div>
          </form>
      </div>
    
 */