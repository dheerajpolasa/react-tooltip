import React from 'react';
// import ReactTooltip from 'react-tooltip'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button';

class TooltipWrapper extends React.Component {

    changeIcon = () => {
        if(this.button.innerText === 'Download') {
            return;
        }
        this.button.innerHTML = `Download`
    }

    changeText = () => {
        if(this.button.innerHTML === '<i class="fa fa-download" aria-hidden="true"></i>') {
            return;
        }
        this.button.innerHTML = `<i class="fa fa-download" aria-hidden="true"></i>`
    }

    getPosition = () => {
        console.log(this.props.position)
        let position = this.props.position;
        return position.toString();
    }

    componentDidMount() {
        // this.button.addEventListener('mouseover', this.changeText);
        // this.button.addEventListener('mouseout', this.changeIcon);
    }

    render() {
        return (

            <Tooltip title="download" placement={this.props.position} style={{margin: '0 auto', backgroundColor: 'burlywood', width: 100, height: 50}} ref={(element) => this.tooltipdiv = element}>
                <Button className="button" ref={(element) => this.button = element}> <span className="download-text">Download</span> <span className="image"><i className="fa fa-download" aria-hidden="true"></i></span> </Button>
            </Tooltip>
        )
    }
}

export default TooltipWrapper