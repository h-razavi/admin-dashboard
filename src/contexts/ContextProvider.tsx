import { ContentType } from "@syncfusion/ej2-react-grids";
import React, { createContext, useContext, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

type ValueType ={
    chat?: boolean;
    cart?: boolean;
    userProfile?: boolean;
    notification?: boolean;
}

type ContextType = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<boolean | ((s: boolean) => boolean)>;
  isClicked: ValueType;
  setIsClicked: React.Dispatch<ValueType | ((s: ValueType) => ValueType)>;
  handleClick : (a:string) => void;
  screenSize : any,
  setScreenSize : React.Dispatch<any>,
  currentColor: string,
  currentMode: string,
  setColor: (e:any)=>void,
  setMode: (e:any)=>void,
  themeSettings: boolean,
  setThemeSettings: React.Dispatch<boolean>
};

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};



const StateContext = createContext<ContextType | null>(null);

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<ValueType | any>(initialState);
  const [screenSize , setScreenSize] = useState(undefined);
  const [currentColor , setCurrentColor] = useState<string>("#03C9D7");
  const [currentMode , setCurrentMode] = useState<string>("Light");
  const [themeSettings , setThemeSettings] = useState<boolean>(false)

  const setMode = (e) => {
    setCurrentMode(e.target.value)
    localStorage.setItem('themeColor',e.target.value);
    setThemeSettings(false);
  }

  const setColor = (color) => {
    setCurrentColor(color)
    localStorage.setItem('colorMode',color)
    setThemeSettings(false);
  }


  const handleClick = (clicked : string) => {
    setIsClicked({...initialState , [clicked]: true})
}
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
