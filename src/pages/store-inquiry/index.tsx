import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import styled from "styled-components";
import { Formik } from "formik";
import type { ChangeEvent } from "react";

const FieldSet = styled.fieldset`
  position: relative;
  margin-top: 24px;
  padding: 36px 0 32px;
  border: none;
  border-radius: 12px;
  background-color: #f3f0ff;
`;
const Legend = styled.legend`
  position: absolute;
  top: 12px;
  left: 12px;
  color: #7950f2;
  font-size: 20px;
`;
const InputWrapper = styled.div`
  width: 100% !important;
  max-width: 500px !important;
  margin: 0 auto !important;
`;
const TextInput = styled(TextField)`
  display: flex !important;
  margin: 24px auto 0 !important;

  & div {
    width: 100% !important;
  }
`;
const StyledFormControl = styled(FormControl)`
  display: flex !important;
  margin: 24px auto 0 !important;
  width: 100% !important;

  & div {
    width: 100% !important;
  }
`;
const FileUploadButton = styled(Button)`
  margin-top: 24px !important;
`;
const SubmitButton = styled(Button)`
  display: block !important;
  width: 70%;
  margin: 32px auto 24px !important;
  padding: 12px !important;
`;

export default function LoginPage() {
  return (
    <Container maxWidth={"md"}>
      <h1>입점문의</h1>
      <Formik
        initialValues={{
          businessName: "",
          businessNumber: "",
          homepage: "",
          name: "",
          phone: "",
          email: "",
          primaryBrand: "",
          primaryCategory: 0,
          productIntro: "",
          otherShoppingMallLink: "",
          files: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue,
          } = props;
          return (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <FieldSet>
                <Legend>회사 정보</Legend>

                <InputWrapper>
                  <TextInput
                    name={"businessName"}
                    label="회사이름"
                    required
                    placeholder={"이름을 입력해주세요"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.businessName}
                  />
                  <TextInput
                    name={"businessNumber"}
                    label="사업자 등록 번호"
                    required
                    type={"number"}
                    placeholder={"-를 빼고 숫자만 입력해주세요"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.businessNumber}
                  />
                  <TextInput
                    name={"homepage"}
                    label="홈페이지"
                    placeholder={"www.ggumim.co.kr"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.homepage}
                  />
                </InputWrapper>
              </FieldSet>
              <FieldSet>
                <Legend>입점 신청자 정보</Legend>

                <InputWrapper>
                  <TextInput
                    name={"name"}
                    label="이름"
                    required
                    placeholder={"이름을 입력해주세요"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <TextInput
                    name={"phone"}
                    label="전화번호"
                    required
                    type={"number"}
                    placeholder={"-를 빼고 숫자만 입력해주세요"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <TextInput
                    name={"email"}
                    label="이메일"
                    required
                    type={"email"}
                    placeholder={"example@naver.com"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </InputWrapper>
              </FieldSet>
              <FieldSet>
                <Legend>상품 정보</Legend>

                <InputWrapper>
                  <TextInput
                    name={"primaryBrand"}
                    label="대표 브랜드"
                    required
                    placeholder={"브랜드 이름을 입력해주세요"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.primaryBrand}
                  />
                  <StyledFormControl>
                    <InputLabel id="demo-simple-select-label">
                      대표 카테고리
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name={"primaryCategory"}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.primaryCategory}
                    >
                      <MenuItem value={1}>가구</MenuItem>
                      <MenuItem value={2}>생활용품</MenuItem>
                      <MenuItem value={3}>조명</MenuItem>
                    </Select>
                  </StyledFormControl>
                  <TextInput
                    name={"productIntro"}
                    label="상품 소개"
                    placeholder={"상품에 대해 설명해 주세요"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productIntro}
                  />
                  <TextInput
                    name={"otherShoppingMallLink"}
                    label="타입점 쇼핑몰"
                    placeholder={
                      "현재 판매 중인 상품의 url을 첨부해 주시거나, 입점된 쇼핑몰을 알려주세요."
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.otherShoppingMallLink}
                  />

                  <FileUploadButton variant="outlined" component="label">
                    판매 관련 파일 첨부
                    <input
                      name={"files"}
                      type={"file"}
                      multiple
                      hidden
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        console.log(event.target.files);
                        setFieldValue("files", event.target.files);
                      }}
                      onBlur={handleBlur}
                    />
                  </FileUploadButton>
                </InputWrapper>
              </FieldSet>

              <StyledFormControl>
                <FormControlLabel
                  control={<Checkbox checked={true} name="checkAgreements" />}
                  label="입점 문의를 위한 개인 정보 수집 및 이용 동의"
                />
              </StyledFormControl>
              <SubmitButton variant="contained" color="primary" type={"submit"}>
                입점 문의하기
              </SubmitButton>
            </form>
          );
        }}
      </Formik>
    </Container>
  );
}
