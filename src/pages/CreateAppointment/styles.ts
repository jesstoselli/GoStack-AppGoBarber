import styled from "styled-components/native";
import { FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Provider } from ".";
import { RectButton } from "react-native-gesture-handler";

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

export const Container = styled.View``;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight()}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-family: "RobotoSlab-Regular";
  font-size: 20px;
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  background: ${(props) => (props.selected ? "#FF9000" : "#3e3b47")};
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  border-radius: 10px;
  padding: 8px 12px;
`;

export const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  margin-left: 8px;
  font-family: "RobotoSlab-Medium";
  color: ${(props) => (props.selected ? "#232129" : "#f4ede8")};
  font-size: 16px;
`;
