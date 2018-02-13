package com.nayeonsi;

import android.support.annotation.Nullable;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.imagepicker.ImagePickerPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
  @Override
  public boolean isDebug() {
      return BuildConfig.DEBUG;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
      new ImagePickerPackage()
    );
  }

  @Override
  public String getJSMainModuleName() {
      return BuildConfig.RUN_ENTRY;
  }
}
