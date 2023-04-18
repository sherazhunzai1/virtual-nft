import { Button, Grid, Typography } from "@material-ui/core";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import cn from "classnames";
import UploadProfilePicture from "../../Units/UploadProfilePicture";
import PrimaryButton from "../../Units/Buttons/PrimaryButton";
import RegisterInput from "../../Units/InputField/Register";
import { useStyles } from "./styles";
import { updateProfileInfo } from "../../Redux/Actions/artistProfile.actions";

const ProfileEditForm = ({
  userId,
  isProfileUpdating,
  isProfileUpdatingFailed,
  isProfileUpdated,
  user: { bio, fullName, img, portfolio, instagram, twitter, facebook },
  updateProfileInfo,
}) => {
  const classes = useStyles();
  const validationSchema = yup.object({
    fullname: yup.string("").required("Display Name is required."),
    bio: yup.string(""),
    portfolio: yup.string(""),
    twitter: yup.string(""),
    instagram: yup.string(""),
    facebook: yup.string(""),
  });

  const formik = useFormik({
    initialValues: {
      fullname: fullName || "",
      bio: bio || "",
      portfolio: portfolio || "",
      instagram: instagram || "",
      twitter: twitter || "",
      facebook: facebook || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      let formData = new FormData();
      formData.append("fullname", values.fullname);
      formData.append("bio", values.bio);
      formData.append("portfolio", values.portfolio);
      formData.append("instagram", values.instagram);
      formData.append("twitter", values.twitter);
      formData.append("facebook", values.facebook);
      formData.append("userId", userId);
      await updateProfileInfo(formData);
    },
  });

  return (
    <>
      <Grid container className={classes.formRoot}>
        <Grid item lg={8} md={10} sm={12} xs={12}>
          <UploadProfilePicture userId={userId} profileImage={img} />
        </Grid>

        {(isProfileUpdatingFailed || isProfileUpdated) && (
          <Grid item lg={8} md={10} sm={12}>
            <Typography
              className={cn(
                classes.message,
                { [classes.error]: isProfileUpdatingFailed },
                { [classes.success]: isProfileUpdated }
              )}
            >
              {isProfileUpdated
                ? "Update Profile Successfully."
                : "An Error occured. Please try again later."}
            </Typography>
          </Grid>
        )}

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} className={classes.inputsContainer}>
            <Grid
              item
              lg={5}
              md={6}
              sm={12}
              xs={12}
              className={classes.account}
            >
              <p className={classes.title}>Account Info</p>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <RegisterInput
                    fullWidth
                    variant="outlined"
                    label="Display Name"
                    type="text"
                    name="fullname"
                    value={formik.values.fullname}
                    helperText={
                      formik.touched.fullname && formik.errors.fullname
                    }
                    error={
                      formik.touched.fullname && Boolean(formik.errors.fullname)
                    }
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <RegisterInput
                    className={classes.bio}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    label="Bio"
                    type="text"
                    name="bio"
                    value={formik.values.bio}
                    helperText={formik.touched.bio && formik.errors.bio}
                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={5} md={6} sm={12} xs={12} className={classes.social}>
              <p className={classes.title}>Social</p>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <RegisterInput
                    label="Portfolio"
                    variant="outlined"
                    type="text"
                    name="portfolio"
                    value={formik.values.portfolio}
                    helperText={
                      formik.touched.portfolio && formik.errors.portfolio
                    }
                    error={
                      formik.touched.portfolio &&
                      Boolean(formik.errors.portfolio)
                    }
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <RegisterInput
                    label="Instagram"
                    variant="outlined"
                    type="text"
                    name="instagram"
                    value={formik.values.instagram}
                    helperText={
                      formik.touched.instagram && formik.errors.instagram
                    }
                    error={
                      formik.touched.instagram &&
                      Boolean(formik.errors.instagram)
                    }
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <RegisterInput
                    label="Twitter"
                    variant="outlined"
                    type="text"
                    name="twitter"
                    value={formik.values.twitter}
                    helperText={formik.touched.twitter && formik.errors.twitter}
                    error={
                      formik.touched.twitter && Boolean(formik.errors.twitter)
                    }
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <RegisterInput
                    label="Facebook"
                    variant="outlined"
                    type="text"
                    name="facebook"
                    value={formik.values.facebook}
                    helperText={
                      formik.touched.facebook && formik.errors.facebook
                    }
                    error={
                      formik.touched.facebook && Boolean(formik.errors.facebook)
                    }
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.submit}>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <PrimaryButton
                  title="Update"
                  lg
                  primary
                  type="submit"
                  disabled={isProfileUpdating}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Button
                  startIcon={<CancelOutlinedIcon />}
                  fullWidth
                  className={classes.clearButton}
                  onClick={() => {
                    formik.resetForm();
                  }}
                >
                  Clear All
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  const { ArtistProfile } = state;
  return {
    ...ArtistProfile,
  };
};
const mapDispatchToProps = { updateProfileInfo };
export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm);
