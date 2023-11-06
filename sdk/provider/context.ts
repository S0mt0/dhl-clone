import { createContext } from "react";
import { GlobalInitState } from "./init-state";
import { TGlobalContext } from "..";

export const GlobalContext = createContext<TGlobalContext>(GlobalInitState);
