import React from 'react';
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";

function Main(props) {
    return (
        <div>
            <Button/>
            <Text text={'этот текст для main page выванный с пмощью пропсов'}/>
            <Text text={'этот текст для main page выванный с пмощью пропсов'}/>
            <Text text={'этот текст для main page выванный с пмощью пропсов'}/>
        </div>
    );
}

export default Main;