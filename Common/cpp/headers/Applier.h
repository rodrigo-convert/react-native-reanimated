//
// Created by Szymon Kapala on 2020-02-12.
//

#ifndef REANIMATEDEXAMPLE_APPLIER_H
#define REANIMATEDEXAMPLE_APPLIER_H

#include <memory>
#include <vector>
#include <jsi/jsi.h>
#include "SharedValue.h"

using namespace facebook;

class Applier {
  public:
    std::shared_ptr<jsi::Function> worklet;
    std::vector<std::shared_ptr<SharedValue>> sharedValues;
    Applier(std::shared_ptr<jsi::Function> worklet, std::vector<std::shared_ptr<SharedValue>> sharedValues);
    virtual bool apply(jsi::Runtime &rt, jsi::Object & module);
    virtual ~Applier();
};

#endif //REANIMATEDEXAMPLE_APPLIER_H