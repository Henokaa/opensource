const Popup = () => {
    return (
      <div className="popup">
        <button className="close-button">
          <button className="button">
            <img src="" />
          </button>
        </button>
        <button className="textbutton">
          <div className="text">
            <p className="text-2">Is this it?</p>
            <p className="text-3">If you answer yes, you will sumbit this entity. You won’t delete message or edit it, think about it</p>
          </div>
          <button className="button">
            <button className="button-1">
              <div className="labelpadding">
                <p className="text-4">Yes</p>
                <div className="padding" />
              </div>
            </button>
            <button className="button-2">
              <div className="labelpadding">
                <p className="text-5">No</p>
                <div className="padding" />
              </div>
            </button>
          </button>
        </button>
      </div>
    )
  }
  
  .popup {
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 32px 32px 32px;
    gap: 32px;
    background-color: #ffffff;
  }
  .close-button {
    height: 0px;
    width: 785px;
  }
  .button {
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px;
    gap: 4px;
  }
  .img-1 {
    height: 24px;
    width: 24px;
    background-color: #ffffff;
  }
  .textbutton {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
  }
  .text-2 {
    text-align: left;
    vertical-align: middle;
    font-size: 32px;
    font-family: Inter;
    line-height: 40%;
    color: #000000;
  }
  .text-3 {
    text-align: left;
    vertical-align: middle;
    font-size: 16px;
    font-family: Roboto;
    line-height: 24%;
    color: #000000;
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
  }
  .button-1 {
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 9px 20px;
    gap: 4px;
    background-color: #516dff;
  }
  .labelpadding {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .text-4 {
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    font-family: Roboto;
    line-height: 24%;
    color: #ffffff;
  }
  .padding {
    height: 2px;
    width: 27px;
  }
  .button-2 {
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 9px 20px;
    gap: 4px;
  }
  .labelpadding {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .text-5 {
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    font-family: Roboto;
    line-height: 24%;
    color: #516dff;
  }
  .padding {
    height: 2px;
    width: 21px;
  }
