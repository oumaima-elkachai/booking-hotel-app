import React from 'react';

class Rech extends React.Component {
    state = { visible: false };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    render (){
    return (
        <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
          </div>
          <div className="contentHolder">
          </div>
          
        </div>
      </div>
    );
};
}

export default Rech;